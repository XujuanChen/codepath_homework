# Honeypot Assignment

**Time spent:** **10** hours spent in total

**Objective:** 
Create a honeynet using MHN-Admin. Present your findings as if you were requested to give a brief report of the current state of Internet security. Assume that your audience is a current employer who is questioning why the company should allocate anymore resources to the IT security team.

### MHN-Admin Deployment (Required)

**Summary:** 
I deployed MHN-Admin on GCP VM instance. Please see the gif below:

<img src="mhn-admin.gif">

### Dionaea Honeypot Deployment (Required)

**Summary:** 
Dionaea is a low-interaction honeypot that captures attack payloads and malware.

<img src="mhn.gif">

### Database Backup (Required) 

**Summary:** 
MHN-Admin uses mongodb to store the data collected from honeypots.
I've exported about 4900 records in the JSON file which I have been uploaded on this GitHub branch.

The data includes: 
id, protocol, hpfeed_id, timestamp, source_ip, source_port, destination_port, identifier, and honeypot.

'''
{
  "_id": {
    "$oid": "637a9a50616a1e65e38e1ebc"
  },
  "protocol": "pcap",
  "hpfeed_id": {
    "$oid": "637a9a50616a1e65e38e1ebb"
  },
  "timestamp": {
    "$date": "2022-11-20T21:21:20.012Z"
  },
  "source_ip": "5.188.206.38",
  "source_port": 59163,
  "destination_port": 20118,
  "identifier": "30593c00-6919-11ed-9829-42010a8e0003",
  "honeypot": "dionaea"
}
'''
### Deploying Additional Honeypot(s) (Optional)

#### 4 Honeypots deployed:
- honeypot-1-dionaea
- honeypot-2-conpot
- honeypot-3-cowrie
- honeypot-4-elastichoney

<img src="honeypots.png">

### Malware Capture and Identification (Optional)

#### 12 Malwares

**Summary:**
I picked one of the IP address from the data collected by Dionaea honeypot,
and looked up on VirusTotal for the malwares detected.

'''
file	daf5d1b04647ffdf9a6971bc01ab082d509b590a3d42ebc18ff110970a67b25a
'''

'''
MD5	ac60b8bb053dfdc66de511252ca0797c
SHA-1	f97d8ff94cc73eb0f1f918efebcbbbc81b78a45a
SHA-256	763f452d2748cb66f24df57148aea4f8c14a85374d57b1ec2719a5db06aa4054
SSDEEP	768:8VDJdHNPylK9ZhcDrIkZCj/NqEVKY2tJSfwNM8:GFxNPoK9ZhorVZ8NqEVAJv68
TLSH	T1F8F3319E87846FFE768F6AF9A5D0A941E7242601F45089BF58DDB78ACF28D6C3314030
File type	Text
Magic	ASCII text, with very long lines
File size	159.57 KB (163404 bytes)
'''
<img src="malware1.png">

#### 3 Malwares

**Summary:** 
I picked one of the IP address from the data collected by Dionaea honeypot,
and looked up on VirusTotal for the malwares detected.



'''
MD5	409a2d8284889296b8bc4396b5ddaa3d
SHA-1	2e692b543de9d009c5bd574a735ab2d461589c73
SHA-256	5146c898c542a70695df8ed3b447401481d93e6b5bd4bdc430c2a9e955eec328
SSDEEP	6144:XFMMQzZeDU/Bk1VucAfdeiFz/tTVDXTsjurQPNF:XFRDKBk1VucAfdeiFz/hVDaug
TLSH	T10D8532BE171E21D71A2E4156CB38E02473189A2FF433F585767EC1587A27B48EA8C4DE
File type	Text
Magic	ASCII English text, with very long lines, with CRLF line terminators
TrID	file seems to be plain text/ASCII (0%)
File size	1.74 MB (1826232 bytes)
'''

<img src="malware2.png">

## Notes

Describe any challenges encountered while doing the assignment.
