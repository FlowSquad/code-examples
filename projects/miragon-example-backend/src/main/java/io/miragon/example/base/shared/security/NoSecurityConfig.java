package io.miragon.example.base.shared.security;

import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Profile("no-security")
@EnableWebSecurity
public class NoSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(final HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/**")
                .permitAll();
    }
}
