
Feature: Open rokomari Website And Sign Up

    Background: User Open Rokomari Website
        Given User Open The Rokomari Website

    Scenario: Open rokomari Website And Sign Up
        And Click Cross Button Of Add
        And Click On Sign In Button
        And Click On Sign UP Button
        And Enter users informations:
            | full_name | Md Abul Khan  |
            | email     | abul@khan.com |
            | mobile    | 01798946788   |
            | password  | 123456        |
        ## And Select The Re-Captcha Check Box
        Then Click On The Create Account Button