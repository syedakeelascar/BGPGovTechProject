# BGP-GovTech Assignment

# Prerequisites
    1. Install Java version "1.8.0_201" and steup required enviroment path variables.
    2. Install Maven version "3.6.0" and setup required enviroment path variables.
    
# Running BGP-GovTech Test
	1. Download this project and extract into destination project folder.
	2. Open the command prompt and go to the project folder location.
	3. Run the below command to execute the BGP regression automation suite.
    4. mvn clean install -U -Dbrowser=CHROME -Dtest="BGPGovTechRunner.class" -Dbgpenv=QA -Dcucumber.options="--tags @regression"
		Note: cucumber options tags are customizable based on the requirement.
			-Dcucumber.options="--tags @regression"		- to run all test cases.
			-Dcucumber.options="--tags '@ac1 or @ac2'"	- to run only test cases - @ac1-1 and @ac1-2
	5. Once the execution is completed report will be generated under target/cucumber/html-report, open index.html file to view the report.

# Author
    Syed Akeel Ascar - Cognizant Technology Solutions
    