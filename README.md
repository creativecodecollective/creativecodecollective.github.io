# CREATIVE CODE COLLECTIVE

We believe in scrappy artistic strategies not perfect code, growth not perfection, collaboration and community not competition. Join us in person, at USC's Media Arts + Practice division, or explore our growing resource hub online.

You can find things to LEARN, DO, USE, and MAKE with code, as well as view projects created by our members.

## Meetups

Summer 2021: Wed 5-7p PDT (check Discord for select dates and URL)
Fall 2021: Date & Time TBA
Discord: Anytime. [Join here](https://discord.gg/thvgd52)

## Please Contribute

Please share your own resources with us if you want! We also welcome any contributions or suggestions in copyediting, documentation, graphics, and code. See our [Contributing Guidelines](https://github.com/creativecodecollective/creativecodecollective.github.io/blob/master/documentation/CONTRIBUTING.md) for all the ways you can be part of our community!

See also our collaborative community guidelines/code of conduct, coming soon.

## Technical Details

### Adding a resource

More info on how to submit additional resources will be coming soon. Contact us on Discord if you want to submit one ASAP!

### Structure

This website uses Jekyll, a Ruby-based static site generator. There are two types of folders in a Jekyll project: static content folders (e.g. `_includes/`), and dynamic content folders (e.g. `community/`). Jekyll uses both to produce the site that you ultimately see. For example, instead of copy-and-pasting the `head` across all pages, it's saved in `_includes/head.html`. Instead of coding all the details of each resource card in `index.html`, these are filled in dynamically using information from a spreadsheet you can update with metadata for the resource, all of which is then automatically loaded and formatted in `index.html`.

After running once, Jekyll will create a `_site/` folder, which contains all the generated files, so make sure not to make your changes in there.

### Setup

For simple changes, like fixing a typo, GitHub lets you edit files right on the repository page. For more complex changes, like changing the site structure, setting up a local server can help you test and preview changes on your own before submitting them.

Here's how to clone the repo and set up a local server (instructions referenced from the Jekyll [Quickstart page](https://jekyllrb.com/docs/)).

1. [Check](https://jekyllrb.com/docs/installation/#requirements) if you have Ruby, RubyGems, GCC, and Make installed. If not, follow instructions for your operating system to install them.

2. Open your command line (Terminal on Macs) and navigate to wherever you want to put this project folder. For example, if on Mac, you can choose `~/Desktop` (the tilde `~` is a shortcut that means `/Users/YOURUSERNAME`):
```
cd ~/Desktop
```
The path shown in your command line should now be `~/Desktop`.

3. Clone the repository:
```
git clone https://github.com/creativecodecollective/creativecodecollective.github.io.git
```
In the folder you chose, you should now see `creativecodecollective/` appear as a new folder.

4. Navigate to that folder:
```
cd creativecodecollective
```
The path shown in your command line should now be `~/Desktop/creativecodecollective`.

5. Run this command to install all the dependencies this project uses, as specified in `Gemfile`:
```
bundle install
```
If that's successful, it should say: "Bundle complete!"

6. Serve the website:
```
bundle exec jekyll serve
```
It should tell you the server address (http://127.0.0.1:4000/, which you can also write as http://localhost:4000) and let you know that the server is now running.

7. In your browser, go to the server address. The website should load, and any changes you save in the files will automatically update on the website!
