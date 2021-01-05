# tailwindcss.test


#### tailwindcss install

https://tailwindcss.com/docs/guides/create-react-app



> Unknown at rule @tailwind 해결

``` bash
https://stackoverflow.com/questions/47607602/how-to-add-a-tailwind-css-rule-to-css-checker

1. Install stylelint extension code --install-extension stylelint.vscode-stylelint

2. Install stylelint recommended config npm install stylelint-config-recommended --save-dev

3. Add these two lines in your vscode USER SETTINGS

    "css.validate": false, // Disable css built-in lint
    "stylelint.enable": true, // Enable sytlelint

4. Paste these lines into a file called .stylelintrc in your project's root directory, create it if it does not exist. More information about stylelint's configuration follow this link: https://stylelint.io/user-guide/

{
  "extends": "stylelint-config-recommended",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "tailwind"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}

```

