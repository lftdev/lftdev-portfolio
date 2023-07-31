export default class Repository {
  name = ''
  description = ''
  htmlUrl = ''
  thumbnail = ''
  ghPages = ''
  constructor (name: string, description: string, htmlUrl: string) {
    this.name = name
    this.description = description
    this.htmlUrl = htmlUrl
    this.thumbnail = `https://raw.githubusercontent.com/lftdev/${name}/main/screenshots/desktop-view.png`
    this.ghPages = `https://lftdev.github.io/${name}`
  }
}
