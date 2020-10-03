// Function to generate markdown for README
// Format was templated the same as it is shown in professional README files
function generateMarkdown(response) {
    return `
    # ${response.Title}

    ##Table of Contents(TOC)
    * [Description](#Description)

    *[Installation](#Installation)

    *[Usage](#Usage)

    *[License](#License)

    *[Contributer](#Contributer)

    *[Test](#Test)



    ##Description
    ${response.Description}

    ##Installation
    ${response.Installation}

    ##Usage
    ${response.Usage}

    ##License
    ${response.License}

    ##Contributer
    ${response.Contributer}

    ##Test
    ${response.Test}

    Would you like to reach us?
    If so look for:

    Github: [${response.Github}]

    Email: [${response.Email}]
`;
}

module.exports = generateMarkdown;