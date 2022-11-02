# Project 7 - WordPress Pen Testing

Time spent: **12** hours spent in total

> Objective: Find, analyze, recreate, and document **five vulnerabilities** affecting an old version of WordPress

## Pen Testing Report

### 1. (Required) Vulnerability Name: Authenticated Stored Cross-Site Scripting

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2.2
  - Fixed in version:  4.2.3
- [ ] GIF Walkthrough: <img src=XSS1.gif />
- [ ] Steps to recreate: 
  - Create a new Post
  - Key in the line of code in text editer: <a href="</a><a title=" onmouseover=alert('test')  ">link</a>
- [ ] Affected source code:
  - [Link 1](https://klikki.fi/adv/wordpress3.html)
  
### 2. (Required) Vulnerability Name: Unauthenticated Genericons Cross-Site Scripting

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2.1
  - Fixed in version: 4.2.2
- [ ] GIF Walkthrough: <img src=XSS2.gif />
- [ ] Steps to recreate: 
  - Create a new Post
  - Key in the line of code in text editer: http://www.example.com/wp-content/themes/twentyfifteen/genericons/example.html#1<img/ src=1 onerror= alert(1)> 
- [ ] Affected source code:
  - [Link 1](https://wpscan.com/vulnerability/21169b6d-61dd-4abc-b77b-167ff5f122ac)

### 3. (Required) Vulnerability Name or ID

- [ ] Summary: 
  - Vulnerability types:
  - Tested in version:
  - Fixed in version: 
- [ ] GIF Walkthrough: 
- [ ] Steps to recreate: 
- [ ] Affected source code:
  - [Link 1](https://core.trac.wordpress.org/browser/tags/version/src/source_file.php)

### 4. (Optional) Vulnerability Name or ID

- [ ] Summary: 
  - Vulnerability types:
  - Tested in version:
  - Fixed in version: 
- [ ] GIF Walkthrough: 
- [ ] Steps to recreate: 
- [ ] Affected source code:
  - [Link 1](https://core.trac.wordpress.org/browser/tags/version/src/source_file.php)

### 5. (Optional) Vulnerability Name or ID

- [ ] Summary: 
  - Vulnerability types:
  - Tested in version:
  - Fixed in version: 
- [ ] GIF Walkthrough: 
- [ ] Steps to recreate: 
- [ ] Affected source code:
  - [Link 1](https://core.trac.wordpress.org/browser/tags/version/src/source_file.php) 

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

    Copyright [2022] [Xujuan Chen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
