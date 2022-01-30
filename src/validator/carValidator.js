import Joi from 'joi'

const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required()
        .messages({
            'string.empty': 'Поле не може бути порожнім',
            'string.pattern.base': 'Використовуйте літери без пробілів',
        }),

    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
        .messages({
            'number.base': 'Оберіть рік від 1990 до сьогодні',
            'number.min': 'від 1990р.',
            'number.max': `до ${new Date().getFullYear()} року`
        }),
    price: Joi.number().min(0).max(1000000)
        .messages({
            'number.base': 'Вкажіть ціну числом від 1 до 1 000 000',
            'number.min': 'Число не може бути меншим за 0',
            'number.max': 'Не вище 1000 000'
        })
})

export {carValidator}