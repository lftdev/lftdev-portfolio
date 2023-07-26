export default class Repository {
  name = ''
  description = ''
  html_url = ''
  constructor (name: string, description: string, htmlUrl: string) {
    this.name = name
    this.description = description
    this.html_url = htmlUrl
  }
}
