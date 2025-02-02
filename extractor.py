import os
from mistralai import Mistral
from mistralai.client import MistralClient


api_key = "yAQTi5kX4jbjdNICl5uVmTQv533le9LD"
print(f"API Key: {api_key}")
model = "mistral-small-latest"


client = Mistral(api_key=api_key)

chat_response = client.chat.complete(
    model= model,
    messages = [
        {
            "role": "user",
            "content": "From the following information: find relevant information and organize it by the categories of biographical information, current medications (if applicable), current treatment plan (if applicable), medical history (if applicable) and DO NOT REPEAT INFORMATION; for each category, label the contents like \"bio data 1- age: 22\", \"medication 1: ibuprofen\"; Hey, I’m Aaryan, a 22-year-old guy who’s been battling an autoimmune condition that’s been wreaking havoc on my digestive system for about two years now. Flare-ups leave me exhausted, nauseous, and stuck in bed half the time, which really messes with school and hanging out with friends. My doctors have me on Humira injections every other week and prednisone during rough patches, but the steroids come with brutal side effects—moon face, weight gain, and this jittery energy that keeps me up all night. I’ve also cycled through OTC stuff like ibuprofen for joint pain and Tylenol when my stomach’s too raw, plus probiotics and vitamins to try and calm the chaos. The mental toll sucks too—constantly worrying about triggers or canceling plans last minute makes me feel isolated. It’s been a frustrating trial-and-error ride, but I’m working with my care team to find a balance that lets me live without feeling like a zombie or a lab rat.",
        },
    ]
)
print(chat_response.choices[0].message.content)

