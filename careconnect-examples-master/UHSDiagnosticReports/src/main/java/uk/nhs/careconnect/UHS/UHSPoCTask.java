package uk.nhs.careconnect.UHS;

import org.hl7.fhir.dstu3.model.*;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by kevinmayfield on 15/06/2017.
 */
public class UHSPoCTask {

    public static Task buildFHIROrder(Patient patient, DiagnosticReport report, Practitioner gp, Practitioner consultant) {

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        Task order = new Task();

        order.addIdentifier()
                .setSystem("https://fhir.uhs.nhs.uk/OrderComms/Order")
                .setValue("ABCDE");

        order.setFor(new Reference(patient));

        CodeableConcept classCode = new CodeableConcept();
        classCode.addCoding()
                .setCode("324861000000109")
                .setSystem("http://snomed.info/sct")
                .setDisplay("Review of patient laboratory test report");
        order.setReason(classCode);

        //order.set Source(new Reference(consultant.getId()));
        //order.setF(new Reference(gp.getId()));

        //order.addDetail().setReference(report.getId());

        return order;

    }

    public static Bundle convertToOrderBundle(Task order, Patient patient, Practitioner sourcePractitioner, Organization destinationPractice, DiagnosticReport report)
    {
        Bundle bundle = new Bundle();

        bundle.setType(Bundle.BundleType.MESSAGE);

        MessageHeader messageHeader =new MessageHeader()
                .setSource(new MessageHeader.MessageSourceComponent(new UriType("https:///ordercomms.uhs.nhs.uk")))
                .setReceiver(new Reference("https:///ordercoms.system.org"))
                .setResponsible(new Reference("https:///resultsviewer.system.org"));

        messageHeader.getEvent().setCode("task-create").setSystem("https://fhir.uhs.nhs.uk/message-event-type");
        messageHeader.setTimestamp(new Date());

        bundle.addEntry().setResource(messageHeader);

        // Remove Ids and change to internal references
        order.setId(""); // null the order id
        patient.setId("#pat");
        patient.setManagingOrganization(null);
        patient.getGeneralPractitioner().clear();
        order.setFor(new Reference(patient.getId()));

        sourcePractitioner.setId("#pracsource");
        //sourcePractitioner.getPractitionerRole().clear();

        destinationPractice.setId("#pracdestination");

        //order.setTarget(new Reference(destinationPractice.getId()));
        order.getRequester()
            .setAgent(new Reference(sourcePractitioner.getId()));

        report.setId("#report");
        // Remove the results. We are not sending the report here, just enough information to work with
        report.getResult().clear();
        report.setSubject(new Reference(patient.getId()));
        // TODO report.getPerformer().(new Reference(sourcePractitioner));
        //report.getRequest().clear();


        order.getRelevantHistory().add(new Reference(report));

        bundle.addEntry().setResource(order);

        bundle.addEntry().setResource(patient);

        bundle.addEntry().setResource(sourcePractitioner);

        bundle.addEntry().setResource(destinationPractice);
        bundle.addEntry().setResource(report);

        return bundle;

    }

    public static Bundle convertToOrderResponseBundle(Task taskResponse, Task order, Patient patient, Practitioner sourcePractitioner, Organization destinationPractice, DiagnosticReport report, Practitioner gp)
    {
        Bundle bundle = new Bundle();

        bundle.setType(Bundle.BundleType.MESSAGE);

        MessageHeader messageHeader =new MessageHeader()
                .setSource(new MessageHeader.MessageSourceComponent(new UriType("https:///ordercomms.uhs.nhs.uk")))
                .setReceiver(new Reference("https:///ordercoms.system.org"))
                .setResponsible(new Reference("https:///resultsviewer.system.org"));

        messageHeader.getEvent().setCode("task-completed").setSystem("https://fhir.uhs.nhs.uk/message-event-type");
        messageHeader.setTimestamp(new Date());

        bundle.addEntry().setResource(messageHeader);


        // Remove Ids and change to internal references

        taskResponse.setId("");


        order.setId("#order"); // null the order id
        patient.setId("#pat");
        patient.setManagingOrganization(null);
        //patient.getCareProvider().clear();
        order.setFor(new Reference(patient.getId()));

        //taskResponse.setRequest(new Reference(order.getId()));

        sourcePractitioner.setId("#pracsource");
        //sourcePractitioner.getPractitionerRole().clear();

        destinationPractice.setId("#pracdestination");

        //order.setTarget(new Reference(destinationPractice.getId()));
        //order.setSource(new Reference(sourcePractitioner.getId()));

        gp.setId("#gp");
        //gp.getPractitionerRole().clear();
        //taskResponse.setWho(new Reference(gp.getId()));

        report.setId("#report");
        // Remove the results. We are not sending the report here, just enough information to work with
        report.getResult().clear();
        report.setSubject(new Reference(patient));
        //report.getPerformer().(new Reference(sourcePractitioner));
        //report.getRequest().clear();


        //order.getDetail().get(0).setReference(report.getId());

        bundle.addEntry().setResource(taskResponse);

        bundle.addEntry().setResource(gp);
        bundle.addEntry().setResource(order);

        bundle.addEntry().setResource(patient);

        bundle.addEntry().setResource(sourcePractitioner);
        bundle.addEntry().setResource(destinationPractice);
        bundle.addEntry().setResource(report);

        return bundle;

    }

    public static Task buildFHIROrderResponse(Task order, Patient patient, Practitioner gp) {


        Task task = new Task();

        task.addIdentifier()
                .setSystem("https://fhir.uhs.nhs.uk/MobileApp/OrderResponse")
                .setValue("A12345");

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");


        task.setAuthoredOn(new Date());

        //task.getWho().setReference(gp.getId());

        //task.setTarget(new ResourceReferenceDt("https://fhir.uhs.nhs.uk/Device/OrderComms"));
      //  task.getRequest().setResource(order);
        task.setStatus(Task.TaskStatus.COMPLETED);

        //order.addDetail().setReference("https://fhir.uhs.nhs.uk/OrderComms/DiagnosticReport/12345ReportId");

        return task;

    }
}
