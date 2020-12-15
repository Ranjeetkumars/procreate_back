package com.javasampleapproach.datamongodb;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.javasampleapproach.datamongodb.model.Company;
import com.javasampleapproach.datamongodb.model.Contact;
import com.javasampleapproach.datamongodb.model.Product;
import com.javasampleapproach.datamongodb.repository.CompanyRepository;

@SpringBootApplication
public class SpringDataMongoDbApplication implements CommandLineRunner{

	@Autowired
	CompanyRepository companyRepo;
	
	@Override
	public void run(String... args) throws Exception {
		// clear database
		System.out.println("==========Delete all company entities==========");
		companyRepo.deleteAll();
		
		// save Documents to MongoDB
		System.out.println("==========Save list of company entities==========");
		companyRepo.save(Arrays.asList(
				// Apple company & products
				new Company(1, "Apple",
						
						        // list of products
								Arrays.asList(new Product("A-123", "Iphone 7", "Price: 649.00 USD & FREE shipping"),
													  new Product("A-456", "IPadPro", "Price: 417.67 USD & FREE shipping")),
								
								// contact
								new Contact("Cupertino, CA 95014", "1-408-996-1010")),
				
				// Samsung company & products
				new Company(2, "Samsung",
						
						       // list of products
						       Arrays.asList(new Product("S-012", "GalaxyJ7", "Price: 219.00 USD & FREE shipping"),
														new Product("S-456", "GalaxyTabA", "Price: 299.99 USD & FREE shipping")),
						       
						       // contact
						       new Contact("Seocho District, Seoul, South Korea", "+82-2-2053-3000"))));
		// initial List Companies variable
		List<Company> companies = null;
		
		// fetch all documents
		System.out.println("==========Fetch aLL companies:==========");
		companies = companyRepo.findAll();
		companies.forEach(System.out::println);
		
		// find Company by name
		System.out.println("==========Find a company by name:==========");
		companies = companyRepo.findByName("Samsung");
		companies.forEach(System.out::println);
		
		// find Company by address
		System.out.println("==========Find a company by address:==========");
		companies = companyRepo.findByAddress("Cupertino, CA 95014");
		companies.forEach(System.out::println);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(SpringDataMongoDbApplication.class, args);
	}
}