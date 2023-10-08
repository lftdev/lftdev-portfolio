export default class Project {
  [key: string]: string
  name = ''
  url = ''
  root = '/main'
  thumbnail = ''
  deployUrl = ''
  constructor (name: string, url: string, deployUrl: string) {
    this.name = name
    this.url = url
    this.deployUrl = deployUrl
    this.thumbnail = `https://raw.githubusercontent.com/lftdev/${name}${this.root}/screenshots/desktop-view.png`
    this.deploy = `https://lftdev.github.io/${name}`
  }
}
