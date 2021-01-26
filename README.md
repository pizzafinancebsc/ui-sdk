# 🍕 Pizza Finance  ui-sdk

[![Version](https://img.shields.io/npm/v/@pizzafinance/ui-sdk)](https://www.npmjs.com/package/@pizzafinance/ui-sdk) [![Size](https://img.shields.io/bundlephobia/min/@pizzafinance/ui-sdk)](https://www.npmjs.com/package/@pizzafinance/ui-sdk)

@pizzafinance/ui-sdk is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @pizzafinance/ui-sdk`

## Setup

### Theme

Before using @pizzafinance/ui-sdk, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pizzafinance/ui-sdk'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@pizzafinance/ui-sdk'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pizzafinance.github.io/ui-sdk/)
