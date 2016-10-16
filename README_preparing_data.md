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
  - You need to strip all Non-ANSI characters from the CSV before loading it into the notebook
 - the Final JSON need to be put `www/default-data`
  - then JSONfilereader.js needs to be change to support the new file. (files are hard coded in)

There are a lot of hacks in this code to deal PDF issues.

Ideal code would be all written in one language. Eg Javascript (and Node.js).
And would be completely hands off. 
And would only produce one merged JSON file
