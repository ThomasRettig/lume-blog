// Used to remove custom fields from json ld scripts
const x = [
    'x',
    (data) => {
        console.log('X')
        const { _x, ...rest } = data
        return rest
    },
    { type: 'filter' }
]

export default [
    x,
]
