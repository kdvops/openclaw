{{/*
Expand the name of the chart.
*/}}
{{- define "webapp.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "webapp.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "webapp.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "webapp.labels" -}}
helm.sh/chart: {{ include "webapp.chart" . }}
{{ include "webapp.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "webapp.selectorLabels" -}}
app.kubernetes.io/name: {{ include "webapp.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "webapp.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "webapp.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Create the name of the Resource Name to use
*/}}
{{- define "webapp.resourceName" -}}
{{- printf "%s-%s-%s-%s" .name .Release.Namespace .Release.Name (include "webapp.name" .) | trunc 63 | trimSuffix "-" -}}
{{- end }}



{{/*
Create the shortcut name of the Resource Name to use by service
*/}}

{{- define "webapp.rolloutName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "rollout") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.svcName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "svc") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.ingName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "ing") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.atName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "at") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.cmName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "cm") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.secretName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "secret") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.saName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "sa") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.hpaName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "hpa") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}

{{- define "webapp.vsName" -}}
{{ include "webapp.resourceName" (merge (dict "name" "vs") (dict "Release" .Release "Chart" .Chart "Values" .Values)) }}
{{- end }}
