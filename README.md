# livestreamer

[![npm](https://img.shields.io/npm/v/livestreamer.svg?style=flat-square)](https://www.npmjs.com/package/livestreamer)
[![Travis](https://img.shields.io/travis/nativecode-dev/livestreamer.svg?style=flat-square&label=travis)](https://travis-ci.org/nativecode-dev/livestreamer)
[![TeamCity](https://img.shields.io/teamcity/https/build.nativecode.com/s/livestreamer_continuous.svg?style=flat-square&label=teamcity)](https://build.nativecode.com/viewType.html?buildTypeId=livestreamer_continuous&guest=1)
[![David](https://img.shields.io/david/nativecode-dev/livestreamer.svg?style=flat-square&label=deps)](https://www.npmjs.com/package/livestreamer)
[![David](https://img.shields.io/david/dev/nativecode-dev/livestreamer.svg?style=flat-square&label=devdeps)](https://www.npmjs.com/package/livestreamer)

# Installation
```
npm install --save livestreamer
```

# Requirements

You must have `livestreamer` 1.11+ in order for `TwitchStreamer` to work correctly.

# Usage

## Twitch
```javascript
const options = {
  bin: 'C:\\Program Files (x86)\\Livestreamer\\livestreamer.exe',
  plugins: {
    twitch: {
      token: '<valid_token>'
    }
  },
  stream: {
    outdir: 'D:\\Streams'
  }
}

const TwitchStreamer = require('livestreamer').TwitchStreamer
const twitch = new TwitchStreamer('<channel_name>', options)
const promise = twitch.start('best')
```

## Complete Options
```json
{
  "bin": "/usr/bin/livestreamer",
  "configuration": "~/.livestreamerrc",
  "extension": ".mp4",
  "loglevel": "warning",
  "plugins": {
    "crunchyroll": {
      "password": null,
      "username": null
    },
    "livestation": {
      "email": null,
      "password": null
    },
    "twitch": {
      "cookie": null,
      "token": null
    },
    "ustream": {
      "paassword": null
    }
  },
  "stream": {
    "excludes": [],
    "outdir": "~/livestreamer",
    "overwrite": true,
    "qualities": [
      "1080p60",
      "1080p30",
      "720p60",
      "720p30",
      "best"
    ],
    "types": "rtmp,hls,hds,http,akamaihd"
  }
}

```

# License
Copyright 2017 NativeCode Development <support@nativecode.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
