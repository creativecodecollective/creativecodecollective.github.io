---
layout: default
id: showcase
permalink: showcase
title: Summer Lab | Creative Code Collective
---


## Project Showcase
{: .subtitle }

<div id="resources">
</div>

## Summer Lab Intensive
<div class="article">

9-11a PDT, 4 weeks 2x week, [Sarah Ciston](https://sarahciston.com)

~~Applications due May 1~~

See details below to apply

<hr>

### Description
      
*Frustrated with coding but want to use it in your projects? Always wondered about programming but felt intimidated to try? Overwhelmed with too many choices and confusing jargon? Just don't know where to start?*
    
The Code Collective Summer Lab is an opportunity to join fellow students in a fun and friendly space to dabble in code, ask dumb questions, troubleshoot your dream project, and just explore.
        
This summer intensive builds on USC's Creative Code Collective, a year-round student group supporting critical and artistic coding. We build programming skills in an engaging, non-intimidating environment—emphasizing co-learning and co-teaching, celebrating experimentation and process. We believe in growth not perfection, scrappy artistic strategies not perfect code, collaboration not competition. All levels and languages welcome!
        
During the Summer Lab, we'll explore the relationships among machine learning, datasets, and human language. We will learn strategies for gathering, utilizing, and tending to data (both big and personal) with care and curatorial consideration. We will consider the aesthetics, ethics, and poetics of datasets through the lenses of intersectional identities and text-based machine learning.

We'll tinker with conversational agents like Alexa and text generators like GPT. Through artistic-critical interventions and workshops, we will focus on how these technologies get embedded in the very words we use; and we'll reflect carefully on what assumptions these tools make in their materials, their language, and their users.

### Preparation

**No particular experience is required!** Any kind of field or background is helpful to get started; we'll meet you where you are. You don’t have to install or buy anything in advance either; we’ll handle that together. 

So that we can focus during our time together, it will help if you have in mind a project or a skill you want to work on. We're going to focus on text-based tools, so here's what you can prep in advance:

Have a dataset (text) in mind you’re interested to work with—this could be your own journal, something from the USC Libraries Digital Collection, or anything goes. For example, your corpus could be the entire series of the show Community, like [@kayserifserif](https://github.com/kayserifserif/community-references), or these [sarcastic and serious news headlines](https://huggingface.co/datasets/raquiba/Sarcasm_News_Headline), or the archived pages from the early internet sites like [Friendster and Geosities](https://archive.org/details/webarchivedatasets).

Don't worry, no matter your existing level of comfort with code, even if it's none, we will meet you where you are. Just start from asking, What do you want to make, and why? 

### Goals

* You'll understand  how artists, engineers, makers, and academics can embrace coding with a critical eye toward ethics and a creative glint that can help imagine more equitable futures.
* You will gain comfort exploring data and coding, building on any existing skills with new perspectives both technical and critical. You will also emerge with a zine about what we've learned. 
* You'll develop your portfolio of individual and collaborative code projects, plus the opportunity to continue in the fall with the Code Collective community. 

### Format

This course is a workshop in exploratory programming, run as an open-format collaboratory. Its self-directed learning model requires motivated student engagement and rewards artistic risk-taking. As lab leader I provide technical and theoretical resources to facilitate your projects, and as a group we agree to cultivate a supportive environment for creating. Together we bring our individual skill sets and abilities; our interest to learn from each other and together; and our open minds, mutual respect, and sense of possibility. Practically, this means you come each day ready to discuss the topic and to support each other's co-learning, ideating, and troubleshooting; and you'll have time to develop your code-based projects with support from the collaboratory. Because of the lab nature of this course, we will decide as a group how to work through the readings and where to take them next, thus this schedule and reading list are subject to change depending on your projects and interests. 

Weekly sessions will be divided into "Studio" days, during which we code together and troubleshoot our work, and "Salon" days, during which we discuss something we've read and reflect on the practices we're undertaking. Each will have a text or tutorial attached that pertains to the broader theme. Still the work will be self-directed toward each student's particular project, explorations, and goals. Through collaboration, co-learning, co-teaching, We discover how much we already know and how much we can build on that together.

<hr>

### Apply

Undergraduates at USC and Claremont Colleges are elligible to apply and will receive a $1500 stipend for completing the course requirements. See [USC Humanities in a Digital World Summer Tutorials](https://dornsife.usc.edu/digitalhumanities/summer-tutorials2021/){:target="_blank"} for more information on the course and how to apply. 

Please send a **CV/resume** and a **letter expressing your interest in the course** to [hidw@dornsife.usc.edu](mailto:hidw@dornsife.usc.edu) by **Monday, May 1, 2022**. In the letter, note your availability in July 2022 to meet 9-11a PDT 2x week for 4 weeks. Also briefly describe a text you are interested to work with using code during the Summer Lab. For any questions before submitting, feel free to reach out to Sarah at [ciston dot usc dot edu](mailto:ciston@usc.edu)

</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>
<script>
    let resourses = document.querySelector('.resources')

    // papa parse
    const public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTaVhvuhl2fp41u1WTde4FAf5rxW-pZ9GMbREmSDf-wsM8uXdn5GrikJtweUDoqkFW_fHn3QXc1mxpD/pub?output=csv"
    console.log('<a href="' + public_spreadsheet_url + '">' + public_spreadsheet_url + '</a>');

    // initialise papa parse

    window.addEventListener('DOMContentLoaded', () => {
      Papa.parse(public_spreadsheet_url, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: loadData
      })
    });

    function loadData(r){
      let data = r.data
      for (let d in data){
        createResource(data[d])
      }
    }

    function createResource(r){
        let res = document.createElement("div")
        res.classList.add("res", "res--visible", "lab")

        let projectURL = document.createElement("a")
        projectURL.classList.add("ref-link")
        projectURL.href = r.projectURL
        res.appendChild(projectURL)


        if (r.codeURL) {
            codeURL = document.createElement("a")
            codeURL.href = r.codeURL
            res.appendChild(codeURL)
        }

        if (r.image){
            let imgList = r.image
            let imgID = imgList.substring(33,66)
            console.log(imgID)
            //imgList = imgList.split(",").sort()    
            console.log(imgList)
            console.log(imgID)     
            let thumb = document.createElement("img")
            //thumb.src = "http://drive.google.com/uc?export=view&id=" + imgID
            thumb.src = "https://drive.google.com/file/d/" + imgID + "/preview"
            thumb.classList.add("res-thumb")
            projectURL.appendChild(thumb)
        }
        
        let title = document.createElement("h3")
        title.classList.add("res-title")
        title.textContent = r.title
        projectURL.appendChild(title)

        if (r.description){
            let desc = document.createElement("blockquote")
            desc.classList.add("res-blurb")
            desc.textContent = r.description
            res.appendChild(desc)
        }

        if (r.process){
            let proc = document.createElement("blockquote")
            proc.classList.add("res-blurb")
            proc.textContent = r.process
            res.appendChild(proc)
        }

        let creator = document.createElement("p")
        creator.classList.add("res-creator")
        creator.textContent = r.name
        res.appendChild(creator)

        if (r.media){
            let media = document.createElement("p")
            media.classList.add("res-blurb")
            media.textContent = r.media
            res.appendChild(media)
        }

        if (r.major){
            let major = document.createElement("p")
            major.classList.add("res-blurb")
            major.textContent = r.major
            res.appendChild(major)
        }

        if (r.blurb){
            let blurb = document.createElement("p")
            blurb.classList.add("res-blurb")
            blurb.textContent = r.reflection
            //res.appendChild(blurb)
        }
        
        //separate tags and append
        let tagList = r.tags
        if (tagList != null){
            tagList = tagList.split(",").sort()         
            for (let t of tagList){
                console.log(t)
                let tag = document.createElement("button")
                tag.classList.add("tag")
                tag.setAttribute('value', t)
                tag.textContent = t
                res.appendChild(tag)
                }
            }

        resources.appendChild(res)

    }
</script>
