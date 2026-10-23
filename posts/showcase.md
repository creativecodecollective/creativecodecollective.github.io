---
layout: default
id: showcase
permalink: showcase
title: Showcase | Code Collective
---


## Project Showcase
{: .subtitle }

<div id="resources">
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>
<script>
    // let resources = document.querySelector('.resources')
    let resources = document.querySelector('#resources')

    // papa parse
    const public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfciaaeb0oBHjucRAdRGKBjwDIwsYUoUWS5-yvV70-zzN32eAKLLZOoRJn3zbSDg0R_w_gdgw_Drgi/pub?output=csv"
    // const public_spreadsheet_url = "https://wolke.khm.de/index.php/s/H7YbGcDpqNcKpaK"
    console.log('<a href="' + public_spreadsheet_url + '">' + public_spreadsheet_url + '</a>');
    
    // old url = https://docs.google.com/spreadsheets/d/e/2PACX-1vTaVhvuhl2fp41u1WTde4FAf5rxW-pZ9GMbREmSDf-wsM8uXdn5GrikJtweUDoqkFW_fHn3QXc1mxpD/pub?output=csv
    // new KHM https://wolke.khm.de/index.php/s/H7YbGcDpqNcKpaK
    // new google works "const public_spreadsheet_url = https://docs.google.com/spreadsheets/d/e/2PACX-1vSfciaaeb0oBHjucRAdRGKBjwDIwsYUoUWS5-yvV70-zzN32eAKLLZOoRJn3zbSDg0R_w_gdgw_Drgi/pub?output=csv

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
        res.classList.add("res")
        res.classList.add("res--visible")
        res.classList.add("lab")

        let projectURL = document.createElement("a")
        projectURL.classList.add("ref-link")
        projectURL.href = r.projectURL
        res.appendChild(projectURL)
        
        if (r.codeURL) {
            codeURL = document.createElement("a")
            codeURL.href = r.codeURL
            res.appendChild(codeURL)
        }

        //if (r.image){
          //  let imgList = r.image
            //  let imgID = imgList.substring(33,66)
            //  console.log(imgID)
            //imgList = imgList.split(",").sort()    
            //  console.log(imgList)
            //  console.log(imgID)     
            //  let thumb = document.createElement("img")
            //thumb.src = "http://drive.google.com/uc?export=view&id=" + imgID
            //thumb.src = "https://drive.usercontent.google.com/download?id=" + imgID + "&export=view&authuser=0"
            //thumb.classList.add("res-thumb")
            //projectURL.appendChild(thumb)
        //  }
        
        if (r.title){
            let title = document.createElement("h3")
            title.classList.add("res-title")
            title.textContent = r.title
            projectURL.appendChild(title)
        }

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

        if (r.creator){
            let creator = document.createElement("p")
            creator.classList.add("res-creator")
            creator.textContent = r.name
            res.appendChild(creator)
        }

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