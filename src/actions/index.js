export function signIn(user) {
    console.log('Sign in action creator, user data:', user);

    return {
        type: 'sign-in'
    }
}