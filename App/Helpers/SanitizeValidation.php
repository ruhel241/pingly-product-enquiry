<?php

namespace PinglyProductEnquiry\Helpers;

class SanitizeValidation
{
    public function validateRequestData(array $requestData): array
    {
        $skipKeys = ['nonce', 'route', 'action', 'textarea_fields'];

        $textareaFields = (isset($requestData['textarea_fields']) && is_array($requestData['textarea_fields']))
            ? array_map('sanitize_text_field', wp_unslash($requestData['textarea_fields']))
            : [];

        $data = array_diff_key($requestData, array_flip($skipKeys));

        return $this->sanitizeArrayData($data, $textareaFields);
    }

    public function sanitizeArrayData(array $array, array $textareaFields): array
    {
        $sanitized = [];

        foreach ($array as $key => $value) {
            if (is_string($key)) {
                $key = sanitize_text_field(wp_unslash($key));
            }

            if (is_array($value)) {
                $sanitized[$key] = $this->sanitizeArrayData($value, $textareaFields);
            } elseif (!is_scalar($value)) {
                $sanitized[$key] = '';
            } elseif (in_array($key, $textareaFields, true)) {
                // HTML allowed
                $sanitized[$key] = wp_kses_post(wp_unslash($value));
            } else {
                $sanitized[$key] = sanitize_text_field(wp_unslash($value));
            }
        }

        return $sanitized;
    }
}