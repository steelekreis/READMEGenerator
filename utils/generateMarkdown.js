// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'apache-2.0':
      return `![License: apache-2.0 ](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    case 'gpl-2.0':
      return `![License: gpl-2.0](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`
    case 'gpl-3.0':
      return `![License: gpl-3.0](https://img.shields.io/badge/License-GPL_v3-blue.svg)]`
    case 'MIT':
      return badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    default:
      return ``
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return `(https://opensource.org/licenses/Apache-2.0)`
    case 'GPLv2':
      return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case 'GLPv3':
      return `(https://www.gnu.org/licenses/gpl-3.0.html)`
    case 'MIT':
      return badge = `(https://opensource.org/licenses/MIT)`
    default:
      return ``
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## License`
  } else {
    return ``
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  This project uses 
  ## Table of Contents
  - [Description of Project](#projectDescription)
  - [Visuals](#projectVisuals)
  - [Programming Languages Used](#projectScripts)
  - [Project Usage](#projectUsage)
  - [How can you contribute?](#projectContribution)
  - [How to Install](#projectInstallation)
  - [Tests](#projectTests)
  - [GitHub Repo](#githubUser)
  - [Questions](#projectQuestions)
  ## Description of Project
  ${data.projectDescription}
  ## Visuals
  *Add Visuals Here*
  ## Languages Used
  ${data.projectScripts}
  ## Project Usage
  ${data.projectUsage}
  ## How can you Contribute?
  ${data.projectContribution}
  ## How to Install
  ${data.projectInstallation}
  ## Tests
  ${data.projectTests}
  ## GitHub Repo
  (https://github.com/${data.githubUser})
  ## Questions
  [Contact User](mailto:${data.projectQuestions})
`;
}

module.exports = generateMarkdown;
