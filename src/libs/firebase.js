const ui = new window.firebaseui.auth.AuthUI(window.firebase.auth())

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    tosUrl: '/terms',
    privacyPolicyUrl: '/privacy',
    signInOptions: [
        window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
        window.firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
}

export const startFirebaseUI = function(elementId) {
    ui.start(elementId, uiConfig)
}

export const database = window.firebase.database()

export const storage = window.firebase.storage()