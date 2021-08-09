package io.miragon.example.base.shared.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Slf4j
@ResponseStatus(value = HttpStatus.CONFLICT)
final public class BusinessException extends RuntimeException {

    public BusinessException(final String message) {
        super(message);
        log.debug(message);
    }

}
