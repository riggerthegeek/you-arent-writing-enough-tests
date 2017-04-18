# Part Coverage

This (rather WET) code shows the dangers of not having 100% coverage. There's
a method (`Logger.trace3`) that will cause an infinite loop and invoking the
View class will also kill the application.