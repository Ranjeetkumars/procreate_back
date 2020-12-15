package test;

import ca.uhn.fhir.context.FhirContext;
import ca.uhn.fhir.rest.api.MethodOutcome;
import ca.uhn.fhir.rest.client.api.IGenericClient;
import org.hl7.fhir.r4.model.DateType;
import org.hl7.fhir.r4.model.Enumerations;
import org.hl7.fhir.r4.model.Patient;
import org.hl7.fhir.instance.model.api.IIdType;

public class PatientService {

	//Account account = new Account();


	public static void main(String[] args) {
		serchPatient();
		//addPatient();
	}

	public static void serchPatient() {
		FhirContext ctx = FhirContext.forR4();
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		
		org.hl7.fhir.r4.model.Bundle results = client.search().forResource(Patient.class)
				.where(Patient.FAMILY.matches()
				.value("Ranjeet Kumar Singh"))
				.returnBundle(org.hl7.fhir.r4.model.Bundle.class)
				.execute();

		System.out.println("First page:");
		System.out.println(ctx.newJsonParser()
				
				
				.encodeResourceToString(results));

		
	}

	public static void addPatient() {
		// Create a patient
		Patient newPatient = new Patient();
		// Populate the patient with fake information
		newPatient.addName().setFamily("Ranjeet Kumar Singh").addGiven("Test").addGiven("Test");
		newPatient.addIdentifier().setSystem("http://acme.org/mrn").setValue("12345");
		newPatient.setGender(Enumerations.AdministrativeGender.MALE);
		newPatient.setBirthDateElement(new DateType("2020-11-19"));
		// Create a client
		FhirContext ctx = FhirContext.forR4();
				
		
		IGenericClient client = ctx.newRestfulGenericClient("http://localhost:8080/fhir");
		// Create the resource on the server
		MethodOutcome outcome = client.create().resource(newPatient).execute();
		// Log the ID that the server assigned
		IIdType id = outcome.getId();
		
		if (id != null) {

			System.out.println("Patient Registred Successfully with patient id=" + id);
		
		} else {
			System.out.println("Patient not  Registred Successfully!  Something went worng try agian!");
		}
	}

}
