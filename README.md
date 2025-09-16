Learn more about bridge <a href='https://devpost.com/software/better-real-interactions-for-diagnosis-general-evaluation'> in this DevPost!</a>

# Inspiration
You walk into the doctor's office. Maybe it's your first time with this doctor. Or maybe it's your 100th. At the end of the day, it's always the same story: you don't know how to act. Miscommunication between patients and their doctors is not just a common problem, but a dangerous one: the National Institutes of Health report that up to 27% of medical MALPRACTICE is due to this very miscommunication. While doctors and healthcare practitioners have their malpractice insurance and resources, who's looking out for the patient? Place on top of the patient stressors from everyday life, work, family, and perhaps the struggles of English being the 2nd, or 3rd language, and the miscommunication problem only gets worse.

But imagine a world where patients can clearly express their concerns, and doctors received structured, thorough reports—eliminating miscommunication and saving valuable time. BRIDGE is the AI-powered medical assistant to just that, translating patient concerns into clinically structured reports for their doctors to better prep for the appointment. With aims to be implemented within the contexts of hospitals and healthcare facilities, BRIDGE can be the perfect check-in tool for appointments!

# What It Does
As you enter BRIDGE, you can hop on and click on "Patient Info" to get started! Patients will begin to fill out basic information about themselves, such as their name, age, and email, while expressing any concerns, emotions, and questions they have before meeting with their doctor. Once the information is submitted to the BRIDGE, we use the latest large language model (LLM) capabilities to parse through the data, extract the key takeaways, and format it into a clean, typed-up-in-LaTeX, clinical report of observations, priorities, and other things in the patient's mind to the doctor in a manner that is understandable, reasonable, and rid of potential bias. That way, nothing is forgotten, and things can start on the right foot. It's the ultimate confidence booster and tool for nervous patients.

In addition, patients are also able to download and view their own BRIDGE report for themselves, so they can keep their own records! Total transparency!

# How We Built It
We built the frontend component of the BRIDGE website with the Next.js framework, powered by React. We also used Flask to handle our backend of the application. Programming languages used included Python, JavaScript, & HTML/CSS. We hosted our project on GitHub.

The transformation from patient concerns into a full-fledged clinical report starts with REST API calls to the Flask backend, where BRIDGE uses the Mistral Small 3 GenAI to "clean" the patient concerns with various constraints and formatting. The output from this LLM is then parsed through our Python algorithm to turn it into a clean clinical report, generating LaTeX code to create a report in .tex, and then converting the file into a ready-to-download PDF!
