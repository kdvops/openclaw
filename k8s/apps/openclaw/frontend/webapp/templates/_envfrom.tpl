{{- define "webapp.envFrom" -}}
{{- if .Values.envFrom.enabled }}
envFrom:
  {{- if and .Values.envFrom.sources.configMap .Values.configMap.enabled }}
  - configMapRef:
      name: {{ default (include "webapp.fullname" .) .Values.configMap.name }}
  {{- end }}

  {{- if and .Values.envFrom.sources.secret .Values.secret.enabled }}
  - secretRef:
      name: {{ default (include "webapp.fullname" .) .Values.secret.name }}
  {{- end }}

  {{- if and .Values.envFrom.sources.sealedSecret .Values.sealedSecret.enabled }}
  - secretRef:
      name: {{ default (include "webapp.fullname" .) .Values.sealedSecret.name }}
  {{- end }}
{{- end }}
{{- end }}
