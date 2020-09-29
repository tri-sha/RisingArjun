package com.risingarjun.arjun.security;

/**
 * Constants for Spring Security authorities.
 */
public final class AuthoritiesConstants {
    public static final String ADMIN = "ROLE_ADMIN";
    public static final String ENTERPRISEADMIN = "ROLE_ENTERPRISEADMIN";
    public static final String CENTERHEAD = "ROLE_CENTERHEAD";
    public static final String ACCOUNTANT = "ROLE_ACCOUNTANT";
    public static final String MANAGER = "ROLE_MANAGER";
    public static final String TEACHER = "ROLE_TEACHER";
    public static final String COUNSELLOR = "ROLE_COUNSELLOR";
    public static final String STUDENT = "ROLE_STUDENT";
    public static final String USER = "ROLE_USER";
    public static final String ANONYMOUS = "ROLE_ANONYMOUS";
    private AuthoritiesConstants() {
    }
}
