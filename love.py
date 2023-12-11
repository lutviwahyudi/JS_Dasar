import random

def generate_love_message():
    love_messages = [
        "You are my sunshine!",
        "My love for you is like pi – it's irrational!",
        "You complete me.",
        "You make my heart skip a beat.",
        "I love you more than coding!",
        "You're the Python to my script.",
        "You're the CSS to my HTML – a perfect match.",
    ]

    return random.choice(love_messages)

if __name__ == "__main__":
    love_message = generate_love_message()
    print(love_message)
