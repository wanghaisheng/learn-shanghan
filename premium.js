import { premiumFeatures, subscriptionPlans } from './config.js';

// Handle premium feature usage
function trackPremiumFeatureUsage(featureType) {
    // Load current usage from localStorage
    let usageData = JSON.parse(localStorage.getItem('premiumFeatureUsage')) || {};
    
    // Initialize if not exists
    if (!usageData[featureType]) {
        usageData[featureType] = 0;
    }
    
    // Increment usage
    usageData[featureType]++;
    
    // Save back to localStorage
    localStorage.setItem('premiumFeatureUsage', JSON.stringify(usageData));
    
    // Update UI
    updatePremiumFeatureUI(featureType, usageData[featureType]);
    
    // Check if exceeded trial limit
    const premiumConfig = premiumFeatures[featureType];
    if (usageData[featureType] > premiumConfig.trialLimit) {
        showUpgradeModal();
        return false;
    }
    
    return true;
}

// Update the UI to reflect current usage
function updatePremiumFeatureUI(featureType, usageCount) {
    const premiumConfig = premiumFeatures[featureType];
    const usageElement = document.querySelector(`.premium-feature-${featureType} .trial-usage`);
    
    if (usageElement) {
        usageElement.textContent = `${usageCount}/${premiumConfig.trialLimit}`;
    }
    
    // Update button state if trial limit reached
    const buttonElement = document.querySelector(`.premium-feature-${featureType} button`);
    if (buttonElement && usageCount >= premiumConfig.trialLimit) {
        buttonElement.innerHTML = '<i class="fas fa-lock text-xs mr-1"></i> 升级会员解锁';
        buttonElement.classList.remove(`bg-${premiumConfig.color}-600`, `hover:bg-${premiumConfig.color}-700`);
        buttonElement.classList.add('bg-gray-300', 'text-gray-600');
    }
}

// Show upgrade modal
function showUpgradeModal() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'premium-modal-container';
    modalContainer.classList.add('modal-container');
    
    // Load modal content
    fetch('premium-modal.html')
        .then(response => response.text())
        .then(html => {
            modalContainer.innerHTML = html;
            document.body.appendChild(modalContainer);
            
            // Add event listener to close button
            const closeButton = modalContainer.querySelector('button:first-child');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    document.body.removeChild(modalContainer);
                });
            }
            
            // Add event listener to "not now" button
            const notNowButton = modalContainer.querySelector('.text-center button');
            if (notNowButton) {
                notNowButton.addEventListener('click', () => {
                    document.body.removeChild(modalContainer);
                });
            }
        });
}

// Initialize premium features
function initPremiumFeatures() {
    // Load usage data
    const usageData = JSON.parse(localStorage.getItem('premiumFeatureUsage')) || {};
    
    // Update UI for each feature
    Object.keys(premiumFeatures).forEach(featureType => {
        const usageCount = usageData[featureType] || 0;
        updatePremiumFeatureUI(featureType, usageCount);
        
        // Add event listeners to premium feature buttons
        const buttonElement = document.querySelector(`.premium-feature-${featureType} button`);
        if (buttonElement) {
            buttonElement.addEventListener('click', () => {
                if (trackPremiumFeatureUsage(featureType)) {
                    // Implement premium feature functionality here
                    alert(`正在使用${premiumFeatures[featureType].name}高级功能`);
                }
            });
        }
    });
}

// Export functions for use in other modules
export { trackPremiumFeatureUsage, updatePremiumFeatureUI, showUpgradeModal, initPremiumFeatures };