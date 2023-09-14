module.exports = 
{
    "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "commonjs": true
    },
    "extends": ["eslint:recommended", "react-app", "plugin:prettier/recommended"],
    "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
    },
    "overrides": [
    {
        "files": ["**/*.stories.*"],
        "rules": {
        "import/no-anonymous-default-export": "off"
        }
    }
    ]
}