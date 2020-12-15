/**
 * 
 */
package com.pro.utils;

import java.util.Collection;
import java.util.Map;

import org.springframework.util.StringUtils;

/**
 * @author VENKAT_PRO
 *
 */
public class IsEmptyUtil {
	
	@SuppressWarnings("deprecation")
	public static boolean isEmptyObject(Object object) {
		if (object == null) {
			return true;
		} else if (object != null && object instanceof String && StringUtils.isEmpty(object)) {
			return true;
		} else if (object != null && object instanceof Long && ((Long) object) == 0) {
			return true;
		} else if (object != null && object instanceof Integer && ((Integer) object) == 0) {
			return true;
		} else if (object != null && object instanceof Byte && ((Byte) object) == 0) {
			return true;
		} else if (object != null && object instanceof Collection<?> && ((Collection<?>) object).isEmpty()) {
			return true;
		}else if(object!=null&&object instanceof Map<?,?> &&((Map<?,?>)object).isEmpty()){
		    return true;
	    }else{
		    return false;
	    }
	}
	public static boolean isNotEmptyObject(Object object) {
		return !(isEmptyObject(object));
	}
	
	public static boolean isNotBlank(final CharSequence cs) {
		return !isBlank(cs);
	}

	public static boolean isBlank(final CharSequence cs) {
		int strLen;
		if (cs == null || (strLen = cs.length()) == 0) {
			return true;
		}
		for (int i = 0; i < strLen; i++) {
			if (Character.isWhitespace(cs.charAt(i)) == false) {
				return false;
			}
		}
		return true;
	}
}
