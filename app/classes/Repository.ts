export default class Repository {
  [key: string]: string
  name = ''
  description = ''
  htmlUrl = ''
  root = '/main'
  thumbnail = ''
  deploy = ''
  constructor (name: string, description: string, htmlUrl: string) {
    this.name = name
    this.description = description
    this.htmlUrl = htmlUrl
    this.thumbnail = `https://raw.githubusercontent.com/lftdev/${name}${this.root}/screenshots/desktop-view.png`
    this.deploy = `https://lftdev.github.io/${name}`
  }
}
