# Js Utils

**Useful And Easy-To-Use Utilities Written In Typescript**

> This library is being developed while I am using this on my work and use with precaution. I recommend you to check
> source code before you deploy.
> Perhaps you can find some bugs and I will be happy if you report them to me.

## TODO

- [ ] UpperCase first character in String

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#Usage)
    - [Toaster](#Toaster)
    - [Carbon](#Carbon)
    - [Random](#Random)
    - [String](#String)
    - [toHumanReadableFileSize](#toHumanReadableFileSize)

## Introduction

Available utilities are listed below.

- [Toaster](#Toaster) - is a class that helps you to show toast messages with **a single static method anywhere inside
  your app**.
- [Carbon](#Carbon) - is a class that helps you to work with dates in a more convenient way. It is inspired
  by [Carbon](https://carbon.nesbot.com/) for PHP.
- [Random](#Random) - is a class that helps you to generate random values.
- [String](#String) - is a class that helps you to work with strings in a more convenient way.
- [toHumanReadableFileSize](#toHumanReadableFileSize) - is a function that converts bytes to human readable file size.

## Installation

Install via npm

```bash
npm install w99910/js-utils
```

or clone the repository

```bash
git clone https://github.com/w99910/js-utils.git
```

## Usage

### Toaster

Toast messages globally anywhere inside your app with a single static method.

> `animejs` library is used for toast animation.

- Initialize before using

```javascript
import {Toaster} from 'js-utils';

const toaster = document.createElement('div');
document.body.appendChild(toaster);
new Toaster(toaster);
```

- Toast message anywhere inside your app

```javascript
Toaster.toast('Hello World!');
```

- Select toast type - `info`, `success`, `warning`, `error`.

  Default is `info`.

```javascript
Toaster.toast('Hello World!', 'success');
```

- Select toast duration - in milliseconds.

  Default is `20000` ( 2 seconds ).

```javascript
Toaster.toast('Hello World!', 'success', 5000);
```

### Carbon

### Random

### String

### toHumanReadableFileSize
