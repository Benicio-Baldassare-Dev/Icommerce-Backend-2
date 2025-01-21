import bcyrpt from 'bcrypt'

export const createHash = (password) => {
    return bcyrpt.hashSync(password, bcyrpt.genSaltSync(10));
}

export const isValidPassword = (password, user) => {
    return bcyrpt.compareSync(password, user.password);
}