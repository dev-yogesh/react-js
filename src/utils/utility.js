export const validateOldPassword = (password) => {
    if(password === ''){
        return 'Old Password required'
    }else if(password?.length < 8 || password?.length > 16){
        return 'Passord min 8 and max 16'
    }else{
        return ''
    }
}

export const validateNewPassword = (password) => {
    if(password === ''){
        return 'New Password required'
    }else if(password?.length < 8 || password?.length > 16){
        return 'Passord min 8 and max 16'
    }else{
        return ''
    }
}

export const validateConfirmPassword = (password, conformPassword) => {
    if(conformPassword === ''){
        return 'Confirm password required'
    }else if(password !== conformPassword){
        return 'Password and confirm password should match'
    }else{
        return ''
    }
}

export const validateCode = (code) => {
    if(code === ''){
        return 'Code required'
    }else if(code.length !== 5){
        return 'Must be 5 in length'
    }else{
        return ''
    }
}