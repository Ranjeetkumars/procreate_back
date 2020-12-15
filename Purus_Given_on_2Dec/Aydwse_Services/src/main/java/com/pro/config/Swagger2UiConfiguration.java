package com.pro.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;





import springfox.documentation.service.*;
import springfox.documentation.spi.service.contexts.SecurityContext;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * @author Bhuvan
 * Document Generation
 * 05-11-2020
 */
//extends WebMvcConfigurerAdapter  

@Configuration
@EnableSwagger2
public class Swagger2UiConfiguration 
{
  /*  
	@Bean
    public Docket api() {
        // @formatter:off
        //Register the controllers to swagger
        //Also it is configuring the Swagger Docket
        return new Docket(DocumentationType.SWAGGER_2).select()
                // .apis(RequestHandlerSelectors.any())
                .apis(Predicates.not(RequestHandlerSelectors.basePackage("org.springframework.boot")))
                // .paths(PathSelectors.any())
                // .paths(PathSelectors.ant("/swagger2-demo"))
                .build();
        // @formatter:on
    }
 
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) 
    {
        //enabling swagger-ui part for visual documentation
        registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
    */
	
	public static final String AUTHORIZATION_HEADER = "Authorization";

	  private ApiInfo apiInfo() {
	    return new ApiInfo("My REST API",
	        "Some custom description of API.",
	        "1.0",
	        "Terms of service",
	        new Contact("Sallo Szrajbman", "www.baeldung.com", "salloszraj@gmail.com"),
	        "License of API",
	        "API license URL",
	        Collections.emptyList());
	  }

	  @Bean
	  public Docket api() {
	    return new Docket(DocumentationType.SWAGGER_2)
	        .apiInfo(apiInfo())
	        .securityContexts(Arrays.asList(securityContext()))
	        .securitySchemes(Arrays.asList(apiKey()))
	        .select()
	        .apis(RequestHandlerSelectors.any())
	        .paths(PathSelectors.any())
	        .build();
	  }

	  private ApiKey apiKey() {
	    return new ApiKey("JWT", AUTHORIZATION_HEADER, "header");
	  }

	  private SecurityContext securityContext() {
	    return SecurityContext.builder()
	        .securityReferences(defaultAuth())
	        .build();
	  }

	  List<SecurityReference> defaultAuth() {
	    AuthorizationScope authorizationScope
	        = new AuthorizationScope("global", "accessEverything");
	    AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
	    authorizationScopes[0] = authorizationScope;
	    return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
	  }

	
}
