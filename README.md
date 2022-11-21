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

<img src="malware1.png">

#### 3 Malwares

**Summary:** 
I picked one of the IP address from the data collected by Dionaea honeypot,
and looked up on VirusTotal for the malwares detected.

<img src="malware2.png">

## Notes

Describe any challenges encountered while doing the assignment.
