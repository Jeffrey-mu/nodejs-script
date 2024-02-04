import axios from 'axios'
import fs from 'fs'


async function main() {
  let { data } = await axios.get('http://101.43.206.247:3230/game-files/list')
  for (let { folderName } of data.data) {
    let game_name = folderName.replace(
      ".apps.minigame.vip",
      "",
    )
    let img_path = `./img/${game_name}.png`
    let {data} = await axios.get(getImgPath(game_name), { responseType: 'arraybuffer' })
    fs.writeFileSync(img_path, data)
  }
}
main()
function getImgPath(game_name) {
  return `https://res.minigame.vip/gc-assets/${game_name}/${game_name}_icon.png`
}
