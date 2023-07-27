export default class Repository {
  name = ''
  description = ''
  html_url = ''
  thumbnail = ''
  constructor (name: string, description: string, htmlUrl: string) {
    this.name = name
    this.description = description
    this.html_url = htmlUrl
    this.thumbnail = `https://raw.githubusercontent.com/lftdev/${name}/main/screenshots/desktop-view.png`
  }
}
