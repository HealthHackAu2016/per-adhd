# Preparing Data

Our data preparation pipeling is a utter hack. This is because getting any information out of a PDF is moderately insane

The process is:
navigate to `protoscripts/pmh_scraping/`

 - use `node  	PMHscrape.js > position_info_foo.csv`  to produce a CSV showning what text occurs where.
  - You may need to tweak this file, and/or to make it read the PDF you want
 - spec_types.json controls what key words and expertise are extracted
  - it is a list of Cannon Name -> Alternative Names
 - use ana_ped.ipynb or ana_psych.ipynb to turn those CSV into JSON
  - These are [IPython Notebooks](https://ipython.org/)


There are a lot of hacks in this code to deal PDF issues.
