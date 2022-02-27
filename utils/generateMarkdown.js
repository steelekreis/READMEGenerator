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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
