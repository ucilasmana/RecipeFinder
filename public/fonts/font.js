import { Jost, Catamaran, Paytone_One } from 'next/font/google'
 
// define your variable fonts
const jost = Jost({ 
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
 })
const catamaran = Catamaran({ 
    subsets: ['latin'],
    variable: '--font-catamaran', 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const paytone= Paytone_One({ 
    subsets: ['latin'],
    variable: '--font-paytone',
    weight: '400'
})

const jostFont = jost.variable
const catamaranFont = catamaran.variable
const paytoneFont = paytone.variable
 
export { jostFont, catamaranFont, paytoneFont}