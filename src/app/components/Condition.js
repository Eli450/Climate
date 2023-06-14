import Image from 'next/image'
import sunny from '../../../public/sunny-foggy.png'
import lightRain from '../../../public/rain-light.png'
import thunder from  '../../../public/thunder.png'
import windyCloudy from '../../../public/windy-cloudy-night.png'
import windyNight from '../../../public/windy-night.png'
import windy from '../../../public/windy.png'

export default function Condition({condition}) {
   let image = ''
   
   switch(condition) {
      case 'Sunny':
         image = sunny
         break;
      case 'Light rain':
         image = lightRain
         break;
      case 'Cloudy':
         image = lightRain
         break;
      case 'Mist':
         image = windy
         break;
      case 'Overcast':
         image = windyCloudy
         break;
      default:
         image = sunny
   }
   return (
      <Image src={image}></Image>
   )
}
