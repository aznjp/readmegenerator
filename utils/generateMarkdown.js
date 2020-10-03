// Function to generate markdown for README
// Format was templated the same as it is shown in professional README files
generateMarkdown = response => {
    return `# ${response.Title}



## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)

## Description
${response.Description}

## Installation
${response.Installation}

## Usage
${response.Usage}

## License
${response.License}  

## Badges
${response.Badges}

## Contributing
${response.Contributing}

## Test
${response.Test}

Would you like to reach us?
</br>
Contact Me:

Github: ${response.Github}

Email: ${response.Email}
`;
}

module.exports = generateMarkdown;