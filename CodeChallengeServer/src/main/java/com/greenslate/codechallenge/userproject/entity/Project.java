package com.greenslate.codechallenge.userproject.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
/**
 * Plain entity which represents a project in the application,
 * it is decorated with some Hibernate/JPA annotations in order to facilitate the persistence layer 
 * that will be used.
 * Entity marks this class as a candidate for persistence
 * @author Mario Segura Vargas
 *
 */
@Entity
public class Project {
	/**
	 * Marks this field as a Database  Id and that it will be generated by the DB Engine,
	 * we can of course change that in order to use whatever id generation process is specified
	 */
	@Id @GeneratedValue
    private Long id;
	/**
	 * The non-null annotation specifies that the object cannot be persisted if the field annotated is null
	 * 
	 */
    private @NonNull Date startDate;
    private @NonNull Date endDate;
    private @NonNull int credits;
    
    /**
     * OneToMany specifies that there is a One-To-Many relationship with the Entity UserProject. 
     * We could skip the class UserProject and map directly to User class but UserProject handles some important information we need
     * to represent in the application
     * We will use a Set in order to store the list of UserProjects involving this project
     * Finally JsonBackReference tells the JSON serializer Spring uses to ignore this field in order to avoid a circular reference issues
     * Very important if we want to expose this information thru a REST API, it also implicitly saves network bandwidth because
     * by nature of how lazy loading works we don't actually request UserProjects until we need them.
     */
    @OneToMany(mappedBy = "project")
    @JsonBackReference
    private Set<UserProject> userProjects;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public int getCredits() {
		return credits;
	}
	public void setCredits(int credits) {
		this.credits = credits;
	}
	public Set<UserProject> getUserProjects() {
		return userProjects;
	}
	public void setUserProjects(Set<UserProject> userProjects) {
		this.userProjects = userProjects;
	}
	public Project( Date startDate, Date endDate, int credits) {
		super();
		
		this.startDate = startDate;
		this.endDate = endDate;
		this.credits = credits;
	}
	/**
	 * Empty constructor is explicitly declared because i also declared a non default constructor
	 */
	public Project() {
		
	}
    /**
     * I override default implementation in order to use one that suit my needs, 
     * i need to compare projects by their id. This could be improved though
     */
	 public boolean equals(Object o) {
	    	if(o==null)
	    		return false;
	    	else {
	    		Project other = (Project)o;
	    		return other.getId().equals(this.getId());
	    	}
	    }
}
